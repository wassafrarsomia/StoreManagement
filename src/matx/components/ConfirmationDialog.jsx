import React from "react";
import { Dialog, Button } from "@material-ui/core";

const ConfirmationDialog = ({
  open,
  onConfirmDialogClose,
  text,
  title = "",
  ok,
  onYesClick,
}) => {
  return (
    <Dialog maxWidth="xs" open={open}>
      <div className="p-8 text-center w-360 mx-auto">
        <h4 className="capitalize m-0 mb-2">{title}</h4>
        <p>{text}</p>
        <div className="flex justify-center pt-2 m--2">
          <Button
            className="m-2 rounded hover-bg-primary px-6"
            variant="outlined"
            color="primary"
            onClick={onYesClick}
          >
            {ok}
          </Button>
          {onConfirmDialogClose && (
            <Button
              className="m-2 rounded hover-bg-secondary px-6"
              variant="outlined"
              color="secondary"
              onClick={onConfirmDialogClose}
            >
              No
            </Button>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
