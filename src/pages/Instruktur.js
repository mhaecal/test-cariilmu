import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import { Grid } from 'gridjs';
import { _ } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';
import Page from '../components/Page';
import BaseOptionMenu from '../components/BaseOptionMenu';
import GridjsLanguage from '../utils/GridjsLanguage';

// ----------------------------------------------------------------------

export default function Instruktur() {
  const navigate = useNavigate();
  const courseTable = useRef(null);

  function goToDetail(id) {
    navigate(`/dashboard/instruktur/${id}`);
  }

  const grid = new Grid({
    columns: [
      {
        name: 'id',
        hidden: true
      },
      {
        name: 'avatar',
        hidden: true
      },
      {
        id: 'name',
        name: 'Nama',
        formatter: (cell, row) =>
          _(
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => goToDetail(row.cells[0].data)}
            >
              <Avatar alt={cell} src={row.cells[1].data} sx={{ mr: '15px' }} />
              <Typography sx={{ cursor: 'pointer' }} variant="subtitle1">
                {cell}
              </Typography>
            </Box>
          )
      },
      {
        id: 'total_courses',
        name: 'Total Kursus'
      },
      {
        id: 'option',
        name: '',
        formatter: () => _(<BaseOptionMenu />)
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
      url: 'https://api.cariilmu.co.id/api/v1/public/instructor',
      then: (data) => data.data.records,
      total: (data) => data.data.total_records
    },
    language: GridjsLanguage
  });

  useEffect(() => {
    grid.render(courseTable.current);
  });

  return (
    <Page title="Instruktur">
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
