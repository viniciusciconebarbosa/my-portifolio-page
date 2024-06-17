import { background } from "@chakra-ui/react"


export const  constantePicture = {

  h: "400px",
  backgroundSize: 'cover',
  borderTop :"30px solid #181818c6",
  borderBottom:"30px solid #1c1c1cc5",
  video: { 
    zIndex:"-1000",
    objectFit: 'cover',
    w: '90%',
    bgRepeat:"no-repeat", 
   },

  w: [ "", "100%" ],
  margin: "40px  0",
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  p: "2.5em 1.5em", 
  backgroundColor: "#ffffff40",
  img: {
    border: '2px solid white',
    m: '1em',
    borderRadius: "5%",
    w: "7em",
    h: "7em",
  }
}

export const constanteDivisor = {
  w: '20px',
  h: "100%",
}