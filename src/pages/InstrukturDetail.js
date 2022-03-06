import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Container, LinearProgress, TextField, Typography } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InstructorService from '../services/InstructorService';
//
import Page from '../components/Page';

export default function InstrukturDetail() {
  const params = useParams();
  const [instructor, setInstructor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await InstructorService.getById(params.id);
        setInstructor(res.data);
        setLoading(false);
      } catch {
        window.location.href = '/404';
      }
    };
    fecthData();
  }, [params.id]);

  return (
    <Page title="Detail Instruktur">
      {loading ? (
        <LinearProgress />
      ) : (
        <Container>
          <Box>
            <Avatar
              alt={instructor.name}
              src={instructor.avatar}
              sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }}
            />
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
              {instructor.name}
            </Typography>
            <Box mb={3}>
              <TextField label="Nama" value={instructor.name} variant="outlined" fullWidth />
            </Box>
            <Box mb={3}>
              <Typography variant="subtitle1" mb={1}>
                Deskripsi
              </Typography>
              <CKEditor editor={ClassicEditor} data={instructor.description} />
            </Box>
            <Typography variant="subtitle1" mb={3}>
              Media Sosial
            </Typography>
            {instructor.social_media.map((value) => (
              <Box mb={3} key={value.id}>
                <TextField label={value.type} value={value.url} variant="outlined" fullWidth />
              </Box>
            ))}
          </Box>
        </Container>
      )}
    </Page>
  );
}
