#samplecontract.py
from pyteal import *

"""Basic Counter Application"""

def approval_program():
    handle_creation = Seq([
        App.globalPut(Bytes("Creator"), Txn.sender()),
        App.globalPut(Bytes("member1"), (Txn.application_args[0])),
        App.globalPut(Bytes("member2"), (Txn.application_args[1])),
        App.globalPut(Bytes("member3"), (Txn.application_args[2])),
        App.globalPut(Bytes("member4"), (Txn.application_args[3])),
        Return(Int(1)),
    ])

    handle_optin = Return(Int(0))
    handle_closeout = Return(Int(0))
    handle_updateapp = Return(Int(0))
    handle_deleteapp = Return(Int(0))
    handle_noop = Seq( 
        If(
            Or(
                Txn.application_args[0] == App.globalGet(Bytes("member1")),
                Txn.application_args[0] == App.globalGet(Bytes("member2")),
                Txn.application_args[0] == App.globalGet(Bytes("member3")),
                Txn.application_args[0] == App.globalGet(Bytes("member4")),
            ),  
            App.globalPut(Bytes("Count"), Int(1)),
            App.globalPut(Bytes("Count"), Int(0))
        ),
        Return(Int(1)),
    )


    program = Cond(
        [Txn.application_id() == Int(0), handle_creation],
        [Txn.on_completion() == OnComplete.OptIn, handle_optin],
        [Txn.on_completion() == OnComplete.CloseOut, handle_closeout],
        [Txn.on_completion() == OnComplete.UpdateApplication, handle_updateapp],
        [Txn.on_completion() == OnComplete.DeleteApplication, handle_deleteapp],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop]
    )

    return program


def clear_state_program():
    program = Return(Int(1))
    return program


