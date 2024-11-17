import React, { useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import '../../CSS/Events.css'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types';

const colorPalette = [
  '#1976d2',  // Blue
  '#ff4081',  // Pink
  '#4caf50',  // Green
  '#ff9800',  // Orange
  '#9c27b0',  // Purple
  '#f44336',  // Red
  '#00bcd4',  // Cyan
  '#1abc9c',  // Turquoise
  '#2ecc71',  // Emerald
  '#3498db',  // Peter River (Blue)
  '#9b59b6',  // Amethyst (Purple)
  '#e74c3c',  // Alizarin (Red)
  '#f39c12',  // Orange
  '#d35400',  // Pumpkin
  '#7f8c8d',  // Asbestos (Gray)
  '#e67e22',  // Carrot (Dark Orange)
  '#34495e',  // Wet Asphalt (Dark Blue)
];

// Function to get random color
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

function Events({height, event}) {

  useEffect(() => {
    // console.log('Event data:', event);
  }, [event]);
  return (
    <>
    <h2 className='eventsHead'>Up Coming Events!</h2>
    {/* <h3>{props.event}</h3> */}

    <Box
      sx={{
        maxHeight:height,
        overflowY: 'auto', 
        scrollbarWidth: 'thin',
      }}
    >
     {(event || []).map(data => {
          // Get a new random color for each event
          const randomColor = getRandomColor();

          return (
            <Paper
              key={data.id} 
              sx={{
                paddingLeft: '10px', 
                marginRight: '0px', 
                margin: '10px', 
                borderLeft: `5px solid ${randomColor}`,
                borderTopLeftRadius:'20px' ,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <Typography variant="h6">{data.title}</Typography>
              <Typography variant="body1">{data.description}</Typography>
              <Typography variant="body1">{data.date}</Typography>
            </Paper>
          );
        })}
    </Box>
    </>
  );
}

Events.propTypes = {
  height: PropTypes.string,
};

export default Events;
