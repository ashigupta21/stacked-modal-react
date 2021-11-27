import React, { Component } from "react";

import { createStyles, WithStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { withStyles } from "@material-ui/core/styles";
import MyModal from "./common/MyModal";
import { Button } from "reactstrap";

const styles = (theme: Theme) => createStyles({});

interface ModelParentProps extends WithStyles<typeof styles> {}

interface ModelParentStates {
  modal1: boolean;
  modal2: boolean;
  modal3: boolean;
}

class ModelParent extends Component<ModelParentProps, ModelParentStates> {
  constructor(props: ModelParentProps) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(modal: string) {
    this.setState({
      [modal]: false,
    } as any);
  }

  showModal(modal: string) {
    this.setState({
      [modal]: true,
    } as any);
  }

  render() {
    const { modal1, modal2, modal3 } = this.state;
    return (
      <div>
        <h1>Stacked Modals Example</h1>
        <Button onClick={() => this.showModal("modal1")}>Show Modal 1</Button>
        <hr />

        <MyModal
          showModal={this.showModal}
          closeModal={this.closeModal}
          currentModalNumber={1}
          openState={modal1}
          dialogWidth={"800px"}
          dialogHeight={"400px"}
          otherDialogProps={{
            fullWidth: false,
            maxWidth: false,
          }}
        />
        <MyModal
          showModal={this.showModal}
          closeModal={this.closeModal}
          currentModalNumber={2}
          openState={modal2}
          dialogWidth={"800px"}
          dialogHeight={"400px"}
          otherDialogProps={{
            fullWidth: false,
            maxWidth: false,
          }}
        />
        <MyModal
          showModal={this.showModal}
          closeModal={this.closeModal}
          currentModalNumber={3}
          openState={modal3}
          dialogWidth={"800px"}
          dialogHeight={"400px"}
          otherDialogProps={{
            fullWidth: false,
            maxWidth: false,
          }}
        />
      </div>
    );
  }
}
export default withStyles(styles)(ModelParent);
