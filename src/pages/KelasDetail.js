import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//
import Page from '../components/Page';
import BaseSelect from '../components/BaseSelect';
import BaseChipSelect from '../components/BaseChipSelect';
import { useGetCourseByIdQuery } from '../services/course';

export default function KelasDetail() {
  const params = useParams();
  const { data, isLoading } = useGetCourseByIdQuery(params.id);

  return (
    <Page title="Detail Kelas">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Container>
          <Grid container spacing={5} mb={3}>
            <Grid item xs={12} md={4}>
              <TextField label="Kode" value={data.code} variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField label="Judul" value={data.name} variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Typography variant="subtitle1" mb={1}>
            Deskripsi
          </Typography>
          <CKEditor editor={ClassicEditor} data={data.description} />
          <Box my={4}>
            <Grid container spacing={3} columns={{ xs: 1, md: 4 }}>
              <Grid item xs={1}>
                <BaseSelect
                  label="Kategori"
                  data={[data.course_category]}
                  itemSelected={data.course_category.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Tipe"
                  data={[data.course_type]}
                  itemSelected={data.course_type.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Level"
                  data={[data.course_level]}
                  itemSelected={data.course_level.id}
                />
              </Grid>
              <Grid item xs={1}>
                <BaseSelect
                  label="Metode Ajar"
                  data={[data.course_teach_method]}
                  itemSelected={data.course_teach_method.id}
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
                data={data.instructors}
                itemSelected={data.instructors[0].name}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField label="Durasi" value={data.duration} variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Typography variant="subtitle1" mb={1}>
            Preview Cover
          </Typography>
          <img src={data.cover} alt={data.name} style={{ width: '100%' }} />
        </Container>
      )}
    </Page>
  );
}
