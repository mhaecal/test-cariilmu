export default {
  search: {
    placeholder: 'Cari di halaman ini...'
  },
  sort: {
    sortAsc: 'Sort column ascending',
    sortDesc: 'Sort column descending'
  },
  pagination: {
    previous: 'Sebelumnya',
    next: 'Selanjutnya',
    navigate: (page, pages) => `Halaman ${page} dari ${pages}`,
    page: (page) => `Halaman ${page}`,
    showing: 'Menampilkan',
    of: 'dari',
    to: '-',
    results: 'hasil'
  },
  loading: 'Loading...',
  noRecordsFound: 'Hasil tidak ditemukan',
  error: 'Error saat pengambilan data'
};
