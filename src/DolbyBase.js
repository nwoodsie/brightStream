import { CommsProvider, ThemeProvider, InfoBar } from '@dolbyio/comms-uikit-react';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY4MDA5ODQyMSwic3ViIjoiTTJUaENoeUpuTzg1c2pVbVpXVERZQT09Iiwib2lkIjoiNDVkYzU2NWMtYWU0My00OGRiLWE5MDctZmQxNGRlYTNjNmUxIiwiYmlkIjoiOGEzNjlkNDM4NzI4NDNmNTAxODcyZGE0YWVlMDEzZGUiLCJhaWQiOiJiOGFmNzBlZi1kMjc0LTRiZWUtOTM3NC05ZGU1MmFmMzU5OTQiLCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIl0sInRhcmdldCI6InNlc3Npb24iLCJleHAiOjE2ODAxNDE2MjF9.WM9lVEwNrtzPbvgFhee_KTFtd9AVI71JwtjSrIDgICBIKGLDer379LBza7AEf30BOTcgG4qErS07XLRuqa5N5A';
const refreshToken = async () => token;

const theme = {
  colors: {
    grey: {
      600: 'cyan', // This will change background color of certain UI elements to cyan
    },
  },
};

const dolbyBase = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CommsProvider token={token} refreshToken={refreshToken}>
        {children}
      </CommsProvider>
    </ThemeProvider>
  )
}

export default dolbyBase