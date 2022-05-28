import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Fee, MsgSend } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied,
} from '@terra-money/wallet-provider';
import React, { useCallback, useState } from 'react';

const TEST_TO_ADDRESS = 'terra10v3yfpm4kqmac2rnmy0ylt57z88y8nfxu9ufjp';

export function Portfolio2() {
  const [txResult, setTxResult] = useState<TxResult | null>(null);
  const [txError, setTxError] = useState<string | null>(null);

  const connectedWallet = useConnectedWallet();
  const proceed = useCallback(() => {
    if (!connectedWallet) {
      return;
    }

    if (connectedWallet.network.chainID.startsWith('columbus')) {
      alert(`Please only execute this example on Testnet`);
      return;
    }

    setTxResult(null);
    setTxError(null);

    connectedWallet
      .post({
        fee: new Fee(1000000, '200000uusd'),
        msgs: [
          new MsgSend(connectedWallet.walletAddress, TEST_TO_ADDRESS, {
            uusd: 1000000,
          }),
        ],
      })
      .then((nextTxResult: TxResult) => {
        console.log(nextTxResult);
        setTxResult(nextTxResult);
      })
      .catch((error: unknown) => {
        if (error instanceof UserDenied) {
          setTxError('User Denied');
        } else if (error instanceof CreateTxFailed) {
          setTxError('Create Tx Failed: ' + error.message);
        } else if (error instanceof TxFailed) {
          setTxError('Tx Failed: ' + error.message);
        } else if (error instanceof Timeout) {
          setTxError('Timeout');
        } else if (error instanceof TxUnspecifiedError) {
          setTxError('Unspecified Error: ' + error.message);
        } else {
          setTxError(
            'Unknown Error: ' +
              (error instanceof Error ? error.message : String(error)),
          );
        }
      });
  }, [connectedWallet]);

    return (
            <div> 
                <Container className='mt-5'>
                <Row>
                  <Col sm='3'>
                  <Form>
                    <FormGroup
                          check
                          inline
                    >
                      <Input type="checkbox" />
                      <Label check>
                          Portfolio 1
                      </Label>
                  </FormGroup> 
                    <img src="images/portfolio1.jpg" className="portimg mt-3" alt="portfolio" />
                    </Form>
                </Col>

                <Col sm='3'>
                  <Form>
                    <FormGroup
                          check
                          inline
                    >
                      <Input type="checkbox" />
                      <Label check>
                          Portfolio 2
                      </Label>
                  </FormGroup> 
                    <img src="images/portfolio2.jpg" className="portimg mt-3" alt="portfolio" />
                    </Form>
                </Col>

                <Col sm='3'>
                  <Form>
                    <FormGroup
                          check
                          inline
                    >
                      <Input type="checkbox" />
                      <Label check>
                          Portfolio 3
                      </Label>
                  </FormGroup> 
                    <img src="images/portfolio3.jpg" className="portimg mt-3" alt="portfolio" />
                    </Form>
                </Col>

                <Col sm='3'>
                  <Form>
                    <FormGroup
                          check
                          inline
                    >
                      <Input type="checkbox" />
                      <Label check>
                          Portfolio 4
                      </Label>
                  </FormGroup> 
                    <img src="images/portfolio4.jpg" className="portimg mt-3" alt="portfolio" />
                    </Form>
                </Col>
              </Row>
                <Row className='mt-5'>
                  <Col>
                  <Form>
                      <FormGroup row>
                      <Label
                        for="amount"
                          sm={2}
                        >
                          Enter Amount
                    </Label>
                  <Col>
                  <Input
                      id="enteramount"
                      name="amount"
                      value="1"
                    />
                  </Col>
                  </FormGroup>
                </Form>
              </Col>

              <div className="text-center">
              <Button className="btn-lg btn-deco px-5" onClick={proceed}>Deposit </Button> 
              <Button className="btn-lg btn-deco px-5">Withdraw </Button> 
              <Button className="btn-lg btn-deco">Client Rewards</Button> 
              {connectedWallet && txResult && (
                  <div>
                    <a
                      href={`https://finder.terra.money/${connectedWallet.network.chainID}/tx/${txResult.result.txhash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Tx Result in Terra Finder
                    </a>
                  </div>
                )}
              </div>
              </Row>

            </Container>
            </div> 
        );
    }  
        

