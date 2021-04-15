import { NavbarDrawer } from './NavbarDrawer'
import { CssBaseline } from '@material-ui/core'

export const Layout = ({ children }) => {
  return (
    <body>
      <CssBaseline />
      <NavbarDrawer />
      {children}
    </body>
    )
}