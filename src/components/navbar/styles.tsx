import { Kanit } from 'next/font/google'

const kanit = Kanit({
    weight: '100',
    subsets: ['latin'],
  })

export const constanteStyle = {
    fontFamily: kanit.style.fontFamily,
    display: 'flex',
    flexWrap: ['nowrap'],
    justifyContent: 'center',
    m: ['0.3em 1em'],
    borderRadius: '0.3em 0.3em',
    textColor: "#2e2e2e",
    fontSize: "1em",
    position: 'fixed',
    w: ['90%','70%', '60%'],
    backgroundColor: '#0000007e',
    button : {
      h:'1.4em',
      margin: ['0.4em 0.5em','0.4em 1em'],
      borderRadius: '0.3em 0.3em',
      fontSize: "97%",
      backgroundColor: '#050505ed',
      color: 'white'
    },
    a : {
      p: 'none',
      margin: ['0px'],
      fontSize: "80%",
      color: 'white'
    }
  };
  