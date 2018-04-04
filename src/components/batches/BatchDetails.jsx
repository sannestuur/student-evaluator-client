import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getBatches, updateBatch} from '../../actions/batches'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import './BatchDetails.css'

class BatchDetails extends PureComponent {

  render(){
        const {batch, users, authenticated, userId} = this.props

    return(
          <h1>Batch #{batch.id}</h1>
    )
  }
//
//   componentWillMount() {
//     if (this.props.authenticated) {
//       if (this.props.batch === null) this.props.getBatches()
//       if (this.props.users === null) this.props.getUsers()
//     }
//   }
//
//   joinBatch = () => this.props.joinBatch(this.props.batch.id)
//
//   makeMove = (toRow, toCell) => {
//     const {batch, updateBatch} = this.props
//
//     const board = batch.board.map(
//       (row, rowIndex) => row.map((cell, cellIndex) => {
//         if (rowIndex === toRow && cellIndex === toCell) return batch.turn
//         else return cell
//       })
//     )
//     updateBatch(batch.id, board)
//   }
//
//   renderCel = (rowIndex, cellIndex, symbol, hasTurn) => {
//     return (
//       <button
//         disabled={hasTurn}
//         onClick={() => this.makeMove(rowIndex, cellIndex)}
//         key={`${rowIndex}-${cellIndex}`}
//       >{symbol || '-'}</button>
//     )
//   }
//
//   renderRow = (cells, rowIndex) => {
//     return (<div key={rowIndex}>
//       {cells.map((symbol, cellIndex) => this.renderCel(rowIndex, cellIndex,symbol,false))}
//     </div>)
//   }
//
//   render() {
//     const {batch, users, authenticated, userId} = this.props
//
//     if (!authenticated) return (
// 			<Redirect to="/login" />
// 		)
//
//     if (batch === null || users === null) return 'Loading...'
//     if (!batch) return 'Not found'
//
//     const player = batch.players.find(p => p.userId === userId)
//
  //   return (<Paper class="outer-paper">
  //     <h1>Batch #{batch.id}</h1>
  //
  //     <p>Status: {batch.status}</p>
  //
  //     {
  //       batch.status === 'started' &&
  //       player && player.symbol === batch.turn &&
  //       <div>It's your turn!</div>
  //     }
  //
  //     {
  //       batch.status === 'pending' &&
  //       batch.players.map(p => p.userId).indexOf(userId) === -1 &&
  //       <button onClick={this.joinBatch}>Join Batch</button>
  //     }
  //
  //     <hr />
  //
  //     {batch.board.map(this.renderRow)}
  //   </Paper>)
  // }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  batch: state.batches && state.batches[props.match.params.id],
  users: state.users
})

const mapDispatchToProps = {
  getBatches, getUsers, updateBatch
}

export default connect(mapStateToProps, mapDispatchToProps)(BatchDetails)
