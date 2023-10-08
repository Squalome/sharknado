import {
  GroupAdminUpdated as GroupAdminUpdatedEvent,
  GroupCreated as GroupCreatedEvent,
  GroupMerkleTreeDurationUpdated as GroupMerkleTreeDurationUpdatedEvent,
  MemberAdded as MemberAddedEvent,
  MemberRemoved as MemberRemovedEvent,
  MemberUpdated as MemberUpdatedEvent,
  ProofVerified as ProofVerifiedEvent
} from "../generated/SharknadoSemaphore/SharknadoSemaphore"
import {
  GroupAdminUpdated,
  GroupCreated,
  GroupMerkleTreeDurationUpdated,
  MemberAdded,
  MemberRemoved,
  MemberUpdated,
  ProofVerified
} from "../generated/schema"

export function handleGroupAdminUpdated(event: GroupAdminUpdatedEvent): void {
  let entity = new GroupAdminUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGroupCreated(event: GroupCreatedEvent): void {
  let entity = new GroupCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.merkleTreeDepth = event.params.merkleTreeDepth
  entity.zeroValue = event.params.zeroValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGroupMerkleTreeDurationUpdated(
  event: GroupMerkleTreeDurationUpdatedEvent
): void {
  let entity = new GroupMerkleTreeDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.oldMerkleTreeDuration = event.params.oldMerkleTreeDuration
  entity.newMerkleTreeDuration = event.params.newMerkleTreeDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberAdded(event: MemberAddedEvent): void {
  let entity = new MemberAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.index = event.params.index
  entity.identityCommitment = event.params.identityCommitment
  entity.merkleTreeRoot = event.params.merkleTreeRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberRemoved(event: MemberRemovedEvent): void {
  let entity = new MemberRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.index = event.params.index
  entity.identityCommitment = event.params.identityCommitment
  entity.merkleTreeRoot = event.params.merkleTreeRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberUpdated(event: MemberUpdatedEvent): void {
  let entity = new MemberUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.index = event.params.index
  entity.identityCommitment = event.params.identityCommitment
  entity.newIdentityCommitment = event.params.newIdentityCommitment
  entity.merkleTreeRoot = event.params.merkleTreeRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProofVerified(event: ProofVerifiedEvent): void {
  let entity = new ProofVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.merkleTreeRoot = event.params.merkleTreeRoot
  entity.nullifierHash = event.params.nullifierHash
  entity.externalNullifier = event.params.externalNullifier
  entity.signal = event.params.signal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
