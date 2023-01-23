import React from 'react'
import './style.css'
import { Card } from 'react-bootstrap';

const Main = () => {
    const data=
    { "results": [ 
       
        { "os": "Microsoft Windows 11 Pro", "lastKeepAlive": "2022-10-19T14:33:38Z", "dateAdd": "2022-08-01T08:49:55Z", "ip": "192.168.1.216", "name": "DESKTOPUD0U8ND", "id": "024", "version": "Wazuh v4.3.6", "status": "disconnected" }, 
        { "os": "Microsoft Windows 11 Pro", "lastKeepAlive": "2022-10-20T10:21:02Z", "dateAdd": "2022-10-11T09:31:22Z", "ip": "10.127.0.4", "name": "Win11Agent", "id": "025", "version": "Wazuh v4.3.6", "status": "active" }, 
        { "os": "Microsoft Windows 11 Pro", "lastKeepAlive": "2022-10-19T10:41:01Z", "dateAdd": "2022-10-11T09:35:53Z", "ip": "192.168.43.45", "name": "customer-05-DESKTOP-UH5KTO9", "id": "026", "version": "Wazuh v4.3.8", "status": "disconnected" },
        { "os": "Microsoft Windows 10 Enterprise", "lastKeepAlive": "2022-10-20T09:52:41Z", "dateAdd": "2022-10-20T08:14:44Z", "ip": "192.168.1.65", "name": "customer-05-LAPTOP-UH5KTO9", "id": "027", "version": "Wazuh v4.3.8", "status": "disconnected" },
    ] };
    const total= data.results.length;
    const active= data.results.filter(agent=>agent.status==="active").length;
    const disconnected= data.results.filter(agent=>agent.status==="disconnected").length;
    const pending= data.results.filter(agent=>agent.status==="pending").length;
    const never_connected= data.results.filter(agent=>agent.status==="never_connected").length;
  return (
    <div>
        <h5>Hello admin</h5> 
        <h5>View the status of your agents and the evolution of their lastest alert</h5><br />
        <h1>Installed agent by their status</h1><br />
        <div className='cards'>
          <div>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Total Agent</Card.Title>
        <Card.Text style={{ color: 'rgb(0, 107, 180)' }}>{total}</Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Active Agent</Card.Title>
        <Card.Text style={{ color: 'rgb(0, 120, 113)' }}>{active}</Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Disconnected Agent</Card.Title>
        <Card.Text style={{ color: 'rgb(189, 39, 30)' }} >{disconnected}</Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pending Agent</Card.Title>
        <Card.Text style={{ color: 'rgb(254, 197, 20)' }}>{pending}</Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Never connected Agent</Card.Title>
        <Card.Text style={{ color: 'rgb(100, 106, 119)' }}>{never_connected}</Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      
    </div>
  )
}

export default Main
