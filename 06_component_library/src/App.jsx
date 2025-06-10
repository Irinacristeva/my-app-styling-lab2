import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container sx={{ py: 4, flexGrow: 1 }}>
        <ArticleList />
      </Container>
      <Footer />
    </Box>
  );
}