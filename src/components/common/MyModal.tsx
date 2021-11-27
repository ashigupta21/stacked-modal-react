import React, { Component } from "react";

import {
  createStyles,
  Button,
  WithStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
} from "@material-ui/core";
import { CloseOutlined as CloseIcon } from "@material-ui/icons";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import IconButton from "@material-ui/core/IconButton";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    iconRoot: {
      fill: theme.palette.text.secondary,
      margin: 0,
      width: "2rem",
      height: "2rem",
    },
    headerIcon: {
      position: "absolute",
      right: 10,
      top: 5
    },
    borderNone: {
      border: "1px solid rgba(0, 0, 0, 0)",
    },
    root: {
      overflow: "hidden",
    },
    content: {
      display: "grid",
      height: "80%"

    }
  });

interface MyModalProps extends WithStyles<typeof styles> {
  classes: any;

  closeModal: (e: any) => void;
  showModal: (e: any) => void;
  otherDialogProps: object;

  dialogWidth: string;
  dialogHeight: string;
  currentModalNumber: number;
  openState: boolean;
}

interface MyModalStates {}

class MyModal extends Component<MyModalProps, MyModalStates> {
  constructor(props: MyModalProps) {
    super(props);
  }

  render() {
    const {
      classes,
      openState,
      currentModalNumber,
      showModal,
      closeModal,
      dialogWidth,
      dialogHeight,
      otherDialogProps,
    } = this.props;

    return (
      <Dialog
        classes={{
          paperScrollPaper: classes.root,
        }}
        open={openState}
        onClose={() => closeModal(`modal${currentModalNumber}`)}
        role="paper"
        {...otherDialogProps}
      >
        <div style={{ width: `${dialogWidth}`, height: `${dialogHeight}` }}>
          <DialogTitle className={[classes.borderNone].join(" ")}>
            Modal {currentModalNumber}
            <Grid item className={classes.headerIcon}>
              <IconButton
                onClick={() =>
                  closeModal(`modal${currentModalNumber}`)
                }
              >
                <CloseIcon classes={{ root: classes.iconRoot }} />
              </IconButton>
            </Grid>
          </DialogTitle>

          <DialogContent className={classes.content}>
            {currentModalNumber < 3 ? (
            <Button onClick={() => showModal(`modal${currentModalNumber + 1}`)}>
            Show Modal {currentModalNumber + 1}
          </Button>
            ): (
              <h2>Hurray!!!!</h2>
            )}

          </DialogContent>
        </div>
      </Dialog>
    );
  }
}
export default withStyles(styles)(MyModal);
