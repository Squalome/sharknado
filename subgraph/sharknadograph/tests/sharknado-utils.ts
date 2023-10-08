import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  GroupJoined,
  OwnershipTransferred,
  QuestionAdded,
  QuestionAnswered
} from "../generated/Sharknado/Sharknado"

export function createGroupJoinedEvent(groupId: BigInt): GroupJoined {
  let groupJoinedEvent = changetype<GroupJoined>(newMockEvent())

  groupJoinedEvent.parameters = new Array()

  groupJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )

  return groupJoinedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createQuestionAddedEvent(
  questionId: BigInt,
  groupId: BigInt,
  question: string,
  eligibleHolderTokenContract: Address,
  answerThreshold: BigInt,
  bountyAmount: BigInt
): QuestionAdded {
  let questionAddedEvent = changetype<QuestionAdded>(newMockEvent())

  questionAddedEvent.parameters = new Array()

  questionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  questionAddedEvent.parameters.push(
    new ethereum.EventParam("question", ethereum.Value.fromString(question))
  )
  questionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "eligibleHolderTokenContract",
      ethereum.Value.fromAddress(eligibleHolderTokenContract)
    )
  )
  questionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "answerThreshold",
      ethereum.Value.fromUnsignedBigInt(answerThreshold)
    )
  )
  questionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "bountyAmount",
      ethereum.Value.fromUnsignedBigInt(bountyAmount)
    )
  )

  return questionAddedEvent
}

export function createQuestionAnsweredEvent(
  questionId: BigInt,
  groupId: BigInt,
  isUpvote: boolean,
  totalVotes: BigInt
): QuestionAnswered {
  let questionAnsweredEvent = changetype<QuestionAnswered>(newMockEvent())

  questionAnsweredEvent.parameters = new Array()

  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam("isUpvote", ethereum.Value.fromBoolean(isUpvote))
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "totalVotes",
      ethereum.Value.fromUnsignedBigInt(totalVotes)
    )
  )

  return questionAnsweredEvent
}
