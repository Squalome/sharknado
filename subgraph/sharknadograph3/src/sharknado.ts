import {
  GroupJoined as GroupJoinedEvent,
  LotteryPayout as LotteryPayoutEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  QuestionAdded as QuestionAddedEvent,
  QuestionAnswered as QuestionAnsweredEvent
} from "../generated/Sharknado/Sharknado"
import {
  GroupJoined,
  LotteryPayout,
  OwnershipTransferred,
  QuestionAdded,
  QuestionAnswered
} from "../generated/schema"

export function handleGroupJoined(event: GroupJoinedEvent): void {
  let entity = new GroupJoined(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLotteryPayout(event: LotteryPayoutEvent): void {
  let entity = new LotteryPayout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryPayoutAddress = event.params.lotteryPayoutAddress
  entity.questionId = event.params.questionId
  entity.groupId = event.params.groupId
  entity.question = event.params.question
  entity.eligibleHolderTokenContract = event.params.eligibleHolderTokenContract
  entity.answerThreshold = event.params.answerThreshold
  entity.bountyAmount = event.params.bountyAmount
  entity.upVote = event.params.upVote
  entity.downVote = event.params.downVote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestionAdded(event: QuestionAddedEvent): void {
  let entity = new QuestionAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questionId = event.params.questionId
  entity.groupId = event.params.groupId
  entity.question = event.params.question
  entity.eligibleHolderTokenContract = event.params.eligibleHolderTokenContract
  entity.answerThreshold = event.params.answerThreshold
  entity.bountyAmount = event.params.bountyAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestionAnswered(event: QuestionAnsweredEvent): void {
  let entity = new QuestionAnswered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questionId = event.params.questionId
  entity.groupId = event.params.groupId
  entity.isUpvote = event.params.isUpvote
  entity.totalVotes = event.params.totalVotes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
