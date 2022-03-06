import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CourseService from '../services/CourseService';
//
import Page from '../components/Page';
import BaseSelect from '../components/BaseSelect';
import BaseChipSelect from '../components/BaseChipSelect';

export default function KelasDetail() {
  const params = useParams();
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await CourseService.getById(params.id);
        setCourseDetail(res.data);
        setLoading(false);
      } catch {
        window.location.href = '/404';
      }
    };
    fecthData();
  }, [params.id]);

  return (
    <Page title="Detail Kelas">
      {loading ? (
        <LinearProgress />
      ) : (
        <Container>
          <Grid container spacing={5} mb={3}>
            <Grid item xs={12} md={4}>
              <TextField label="Kode" value={courseDetail.code} variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField label="Judul" value={courseDetail.name} variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Typography variant="subtitle1" mb={1}>
            Deskripsi
          </Typography>
          <CKEditor editor={ClassicEditor} data={courseDetail.description} />
          <Box my={4}>
            <Grid container spacing={3} columns={{ xs: 1, md: 4 }}>
              <Grid item xs={1}>
                <BaseSelect
                  label="Kategori"
                  data={[courseDetail.course_category]}
                  itemSelected={courseDetail.course_category.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Tipe"
                  data={[courseDetail.course_type]}
                  itemSelected={courseDetail.course_type.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Level"
                  data={[courseDetail.course_level]}
                  itemSelected={courseDetail.course_level.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Metode Ajar"
                  data={[courseDetail.course_teach_method]}
                  itemSelected={courseDetail.course_teach_method.id}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3} mb={3} columns={{ xs: 1, md: 3 }} alignItems="center">
            <Grid item xs={1}>
              <Button variant="outlined" component="label" fullWidth>
                Upload File
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <BaseChipSelect
                label="Instruktur"
                data={courseDetail.instructors}
                itemSelected={courseDetail.instructors[0].name}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                label="Durasi"
                value={courseDetail.duration}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle1" mb={1}>
            Preview Cover
          </Typography>
          <img src={courseDetail.cover} alt={courseDetail.name} style={{ width: '100%' }} />
        </Container>
      )}
    </Page>
  );
}
