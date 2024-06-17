import { Kanit } from 'next/font/google'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin'],
  })

export const constanteStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  m: '3em 0 20em 0',
  borderBottom: '1px solid grey',
  p: '0em 0 4em 0',
  div: {
    m: '0.7em',
    p: '10px 30px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '400',
  }
} 