import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Stack, TableCell, Typography } from '@mui/material';
import { Grid } from 'gridjs';
import { _ } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';
import Page from '../components/Page';
import { UserMoreMenu } from '../sections/@dashboard/user';
import GridjsLanguage from '../utils/GridjsLanguage';

// ----------------------------------------------------------------------

export default function Instruktur() {
  const navigate = useNavigate();
  const courseTable = useRef(null);

  function goToDetail(id) {
    navigate(`/dashboard/kelas/${id}`);
  }

  const grid = new Grid({
    columns: [
      {
        name: 'id',
        hidden: true
      },
      {
        id: 'name',
        name: 'Nama',
        formatter: (cell, row) =>
          _(
            <Typography
              sx={{ cursor: 'pointer' }}
              variant="subtitle1"
              onClick={() => goToDetail(row.cells[0].data)}
            >
              {cell}
            </Typography>
          )
      },
      {
        data: (row) => row.course_type.name,
        name: 'Tipe'
      },
      {
        data: (row) => row.course_category.name,
        name: 'Kategori'
      },
      {
        data: (row) => row.course_level.name,
        name: 'Tingkat'
      },
      {
        data: (row) => row.course_teach_method.name,
        name: 'Metode'
      }
    ],
    search: true,
    pagination: {
      enabled: true,
      limit: 10,
      server: {
        url: (prev, page, limit) => `${prev}?page=${page}&limit=${limit}`
      }
    },
    server: {
      url: 'https://api.cariilmu.co.id/api/v1/public/course',
      then: (data) => data.data.records,
      total: (data) => data.data.total_records
    },
    language: GridjsLanguage
  });

  useEffect(() => {
    grid.render(courseTable.current);
  });

  return (
    <Page title="Kelas">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h4" gutterBottom>
            Instruktur
          </Typography>
        </Stack>

        <Box ref={courseTable} />
      </Container>
    </Page>
  );
}
