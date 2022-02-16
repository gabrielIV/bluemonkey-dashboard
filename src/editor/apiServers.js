import React, { useState } from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import Card from '../components/card';
import Input from '../components/system/input';
import Modal from '../components/system/modal';
import Nav from '../components/system/nav';

function ApiServers() {
  let [createModalStatus, setCreateModalStatus] = useState(false);

  return (
    <div className=''>
      <Nav title='API servers'></Nav>

      <div className='card page-card p-3 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Card
                title='Create and API'
                className='text-center btn btn-outline-primary'
                onClick={() => setCreateModalStatus(true)}>
                <div className='d-flex flex-row justify-content-center my-5'>
                  <PlusCircle size={40}></PlusCircle>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Create api Modal  */}
      <Modal
        isActive={createModalStatus}
        close={setCreateModalStatus}
        title='Create API'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <Input type='text' label='API name' />
        </form>
      </Modal>
    </div>
  );
}

export default ApiServers;
