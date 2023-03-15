import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';


declare global {
  interface Window { notify: (message: string, severity?: AlertColor) => void; }
}


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export interface SnackbarMessage {
  message: string;
  severity: AlertColor;
  key: number;
}


export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}


export default function SnackbarController() {
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
    undefined,
  );
  const [openedTime, setOpenedTime] = React.useState<number | undefined>(
    undefined,
  );

  function addSnackMessage(message: string, severity: AlertColor = 'info') {
    setSnackPack((prev) => [...prev, { message, severity, key: new Date().getTime() }]);
  };

  React.useEffect(() => {
    window.notify = addSnackMessage;
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
      setOpenedTime(new Date().getTime());
    } else if (snackPack.length && messageInfo && open && openedTime) {
      // Close an active snack when a new one is added
      setOpenedTime(undefined);
      let msecLeft = 1000 - (new Date().getTime() - openedTime);
      if (msecLeft > 0) {
        setTimeout(() => {setOpen(false);}, msecLeft);
      } else {
        setOpen(false);
      }
    }
  }, [snackPack, messageInfo, open, openedTime]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway' || !openedTime) {
      return;
    }
    setOpen(false);
    setOpenedTime(undefined);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
      >
        <Alert onClose={handleClose} severity={messageInfo ? messageInfo.severity : 'info'} sx={{ width: '100%' }}>
          {messageInfo ? messageInfo.message : ''}
        </Alert>
      </Snackbar>
    </div>
  );
}
