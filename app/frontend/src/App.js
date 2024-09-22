import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Card, CardContent, CircularProgress, Box } from '@mui/material';
import './index.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://full-stack-backend:3001/api")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Full-Stack App
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Your Enhanced React Application
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              This is a modern UI built with Material UI for a rich and polished experience.
            </Typography>
            <Box my={2}>
              <Button variant="contained" color="primary" onClick={() => alert("Hello!")}>
                Click Me
              </Button>
            </Box>
            <Typography variant="h5" component="h2" gutterBottom>
              API Data:
            </Typography>
            {data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;

