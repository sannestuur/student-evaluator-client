import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getBatches } from "../../actions/batches";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import { withRouter } from "react-router";
import "./BatchesList.css";

class BatchesList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batches === null) this.props.getBatches();
    }
  }

  renderBatch = batch => {
    const { history } = this.props;

    return (
      <Card key={batch.id} className="batch-card">
        <CardContent>
          <Typography variant="headline" component="h2">
            Batch #{batch.id}
          </Typography>
          <Typography color="textSecondary">
            Start Date: {batch.startDate}
          </Typography>
          <Typography color="textSecondary">
            End Date: {batch.endDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push(`/batches/${batch.id}`)}
          >
            See this batch
          </Button>
        </CardActions>
      </Card>
    );
  };

  render() {
    const { batches, authenticated } = this.props;
    const { history } = this.props;

    if (!authenticated) return <Redirect to="/login" />;

    if (batches === null) return null;

    return (
      <Paper class="outer-paper">
        <Button
          color="primary"
          variant="raised"
          onClick={() => history.push(`/createbatch`)}
          className="create-batch"
        >
          Create New Batch
        </Button>

        <div>{batches.map(batch => this.renderBatch(batch))}</div>

      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  batches:
    state.batches === null
      ? null
      : Object.values(state.batches).sort((a, b) => b.id - a.id)
});

export default withRouter(
  connect(mapStateToProps, { getBatches })(BatchesList)
);
