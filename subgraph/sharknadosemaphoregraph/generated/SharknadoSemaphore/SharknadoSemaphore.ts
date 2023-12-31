// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GroupAdminUpdated extends ethereum.Event {
  get params(): GroupAdminUpdated__Params {
    return new GroupAdminUpdated__Params(this);
  }
}

export class GroupAdminUpdated__Params {
  _event: GroupAdminUpdated;

  constructor(event: GroupAdminUpdated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class GroupCreated extends ethereum.Event {
  get params(): GroupCreated__Params {
    return new GroupCreated__Params(this);
  }
}

export class GroupCreated__Params {
  _event: GroupCreated;

  constructor(event: GroupCreated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get merkleTreeDepth(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get zeroValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GroupMerkleTreeDurationUpdated extends ethereum.Event {
  get params(): GroupMerkleTreeDurationUpdated__Params {
    return new GroupMerkleTreeDurationUpdated__Params(this);
  }
}

export class GroupMerkleTreeDurationUpdated__Params {
  _event: GroupMerkleTreeDurationUpdated;

  constructor(event: GroupMerkleTreeDurationUpdated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldMerkleTreeDuration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newMerkleTreeDuration(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MemberAdded extends ethereum.Event {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MemberRemoved extends ethereum.Event {
  get params(): MemberRemoved__Params {
    return new MemberRemoved__Params(this);
  }
}

export class MemberRemoved__Params {
  _event: MemberRemoved;

  constructor(event: MemberRemoved) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MemberUpdated extends ethereum.Event {
  get params(): MemberUpdated__Params {
    return new MemberUpdated__Params(this);
  }
}

export class MemberUpdated__Params {
  _event: MemberUpdated;

  constructor(event: MemberUpdated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newIdentityCommitment(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ProofVerified extends ethereum.Event {
  get params(): ProofVerified__Params {
    return new ProofVerified__Params(this);
  }
}

export class ProofVerified__Params {
  _event: ProofVerified;

  constructor(event: ProofVerified) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nullifierHash(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get externalNullifier(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get signal(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class SharknadoSemaphore__groupsResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAdmin(): Address {
    return this.value0;
  }

  getMerkleTreeDuration(): BigInt {
    return this.value1;
  }
}

export class SharknadoSemaphore extends ethereum.SmartContract {
  static bind(address: Address): SharknadoSemaphore {
    return new SharknadoSemaphore("SharknadoSemaphore", address);
  }

  getMerkleTreeDepth(groupId: BigInt): BigInt {
    let result = super.call(
      "getMerkleTreeDepth",
      "getMerkleTreeDepth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getMerkleTreeDepth(groupId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMerkleTreeDepth",
      "getMerkleTreeDepth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMerkleTreeRoot(groupId: BigInt): BigInt {
    let result = super.call(
      "getMerkleTreeRoot",
      "getMerkleTreeRoot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getMerkleTreeRoot(groupId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMerkleTreeRoot",
      "getMerkleTreeRoot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfMerkleTreeLeaves(groupId: BigInt): BigInt {
    let result = super.call(
      "getNumberOfMerkleTreeLeaves",
      "getNumberOfMerkleTreeLeaves(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getNumberOfMerkleTreeLeaves(
    groupId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfMerkleTreeLeaves",
      "getNumberOfMerkleTreeLeaves(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  groups(param0: BigInt): SharknadoSemaphore__groupsResult {
    let result = super.call("groups", "groups(uint256):(address,uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new SharknadoSemaphore__groupsResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_groups(
    param0: BigInt
  ): ethereum.CallResult<SharknadoSemaphore__groupsResult> {
    let result = super.tryCall("groups", "groups(uint256):(address,uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SharknadoSemaphore__groupsResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  verifier(): Address {
    let result = super.call("verifier", "verifier():(address)", []);

    return result[0].toAddress();
  }

  try_verifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("verifier", "verifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _verifier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddMemberCall extends ethereum.Call {
  get inputs(): AddMemberCall__Inputs {
    return new AddMemberCall__Inputs(this);
  }

  get outputs(): AddMemberCall__Outputs {
    return new AddMemberCall__Outputs(this);
  }
}

export class AddMemberCall__Inputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddMemberCall__Outputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }
}

export class AddMembersCall extends ethereum.Call {
  get inputs(): AddMembersCall__Inputs {
    return new AddMembersCall__Inputs(this);
  }

  get outputs(): AddMembersCall__Outputs {
    return new AddMembersCall__Outputs(this);
  }
}

export class AddMembersCall__Inputs {
  _call: AddMembersCall;

  constructor(call: AddMembersCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get identityCommitments(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddMembersCall__Outputs {
  _call: AddMembersCall;

  constructor(call: AddMembersCall) {
    this._call = call;
  }
}

export class CreateGroupCall extends ethereum.Call {
  get inputs(): CreateGroupCall__Inputs {
    return new CreateGroupCall__Inputs(this);
  }

  get outputs(): CreateGroupCall__Outputs {
    return new CreateGroupCall__Outputs(this);
  }
}

export class CreateGroupCall__Inputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleTreeDepth(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get merkleTreeDuration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateGroupCall__Outputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }
}

export class CreateGroup1Call extends ethereum.Call {
  get inputs(): CreateGroup1Call__Inputs {
    return new CreateGroup1Call__Inputs(this);
  }

  get outputs(): CreateGroup1Call__Outputs {
    return new CreateGroup1Call__Outputs(this);
  }
}

export class CreateGroup1Call__Inputs {
  _call: CreateGroup1Call;

  constructor(call: CreateGroup1Call) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleTreeDepth(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateGroup1Call__Outputs {
  _call: CreateGroup1Call;

  constructor(call: CreateGroup1Call) {
    this._call = call;
  }
}

export class RemoveMemberCall extends ethereum.Call {
  get inputs(): RemoveMemberCall__Inputs {
    return new RemoveMemberCall__Inputs(this);
  }

  get outputs(): RemoveMemberCall__Outputs {
    return new RemoveMemberCall__Outputs(this);
  }
}

export class RemoveMemberCall__Inputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get proofSiblings(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get proofPathIndices(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }
}

export class RemoveMemberCall__Outputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }
}

export class UpdateGroupAdminCall extends ethereum.Call {
  get inputs(): UpdateGroupAdminCall__Inputs {
    return new UpdateGroupAdminCall__Inputs(this);
  }

  get outputs(): UpdateGroupAdminCall__Outputs {
    return new UpdateGroupAdminCall__Outputs(this);
  }
}

export class UpdateGroupAdminCall__Inputs {
  _call: UpdateGroupAdminCall;

  constructor(call: UpdateGroupAdminCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newAdmin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateGroupAdminCall__Outputs {
  _call: UpdateGroupAdminCall;

  constructor(call: UpdateGroupAdminCall) {
    this._call = call;
  }
}

export class UpdateGroupMerkleTreeDurationCall extends ethereum.Call {
  get inputs(): UpdateGroupMerkleTreeDurationCall__Inputs {
    return new UpdateGroupMerkleTreeDurationCall__Inputs(this);
  }

  get outputs(): UpdateGroupMerkleTreeDurationCall__Outputs {
    return new UpdateGroupMerkleTreeDurationCall__Outputs(this);
  }
}

export class UpdateGroupMerkleTreeDurationCall__Inputs {
  _call: UpdateGroupMerkleTreeDurationCall;

  constructor(call: UpdateGroupMerkleTreeDurationCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newMerkleTreeDuration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateGroupMerkleTreeDurationCall__Outputs {
  _call: UpdateGroupMerkleTreeDurationCall;

  constructor(call: UpdateGroupMerkleTreeDurationCall) {
    this._call = call;
  }
}

export class UpdateMemberCall extends ethereum.Call {
  get inputs(): UpdateMemberCall__Inputs {
    return new UpdateMemberCall__Inputs(this);
  }

  get outputs(): UpdateMemberCall__Outputs {
    return new UpdateMemberCall__Outputs(this);
  }
}

export class UpdateMemberCall__Inputs {
  _call: UpdateMemberCall;

  constructor(call: UpdateMemberCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get identityCommitment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newIdentityCommitment(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get proofSiblings(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get proofPathIndices(): Array<i32> {
    return this._call.inputValues[4].value.toI32Array();
  }
}

export class UpdateMemberCall__Outputs {
  _call: UpdateMemberCall;

  constructor(call: UpdateMemberCall) {
    this._call = call;
  }
}

export class VerifyProofCall extends ethereum.Call {
  get inputs(): VerifyProofCall__Inputs {
    return new VerifyProofCall__Inputs(this);
  }

  get outputs(): VerifyProofCall__Outputs {
    return new VerifyProofCall__Outputs(this);
  }
}

export class VerifyProofCall__Inputs {
  _call: VerifyProofCall;

  constructor(call: VerifyProofCall) {
    this._call = call;
  }

  get groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleTreeRoot(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signal(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get nullifierHash(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get externalNullifier(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get proof(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }
}

export class VerifyProofCall__Outputs {
  _call: VerifyProofCall;

  constructor(call: VerifyProofCall) {
    this._call = call;
  }
}
