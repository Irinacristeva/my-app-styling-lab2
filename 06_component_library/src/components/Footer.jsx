import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body2">© 2025 Мой блог</Typography>
    </Box>
  );
}