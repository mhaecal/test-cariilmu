import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Container, LinearProgress, TextField, Typography } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//
import Page from '../components/Page';
import { useGetInstructorByIdQuery } from '../services/instructor';

export default function InstrukturDetail() {
  const params = useParams();
  const { data, isLoading } = useGetInstructorByIdQuery(params.id);

  return (
    <Page title="Detail Instruktur">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Container>
          <Box>
            <Avatar
              alt={data.name}
              src={data.avatar}
              sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }}
            />
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
              {data.name}
            </Typography>
            <Box mb={3}>
              <TextField label="Nama" value={data.name} variant="outlined" fullWidth />
            </Box>
            <Box mb={3}>
              <Typography variant="subtitle1" mb={1}>
                Deskripsi
              </Typography>
              <CKEditor editor={ClassicEditor} data={data.description} />
            </Box>
            {data.social_media.length !== 0 && (
              <Typography variant="subtitle1" mb={3}>
                Media Sosial
              </Typography>
            )}
            {data.social_media.map((value) => (
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
