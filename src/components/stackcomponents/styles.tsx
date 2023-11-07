import { Kanit } from 'next/font/google'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin'],
  })

export const constanteStyle = {

    fontFamily: kanit.style.fontFamily,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    w: "10em",
    h: "7em",
    height: '200px',
    div: {
        m: "0.5em",
        fontWeight: "300"
    }
}
