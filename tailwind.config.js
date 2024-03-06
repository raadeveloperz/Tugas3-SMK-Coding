/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        coffeecol: '#FAB876',
        bgcard: '#FCDCAB',
        bgcardtext: '#FFCB7C',
        bgbutton: '#2F2105'
      },
      fontFamily:{
        poppins: 'Poppins',
      },
      height:{
        bg: '23rem',
        bghghcardtxt: '4.55rem',
      },
      fontSize: {
        davi: '1rem',
      },
      lineHeight:{
        hgh: '1.35rem',
        hghcardtext: '0.9rem'
      },
      textColor: {
        clrcff: '#888682'
      },
      margin:{
        bahaha: '-5.5rem',
        leftCardStyle: '38rem',
        leftCardStyle2: '56rem',
        leftCardStyle3: '72.7rem',
      },
      width:{
        widthCardText: '210px',
        widthCardText2: '180px',
        cardbawah: '78%',
        widthinput: '14.8rem'
      },
    },
  },
  plugins: [],
}

