import { makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export const Error = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert severity="error">{props.alertMessage}</Alert>
    </div>
  )
}