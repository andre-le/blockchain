import React, { Component } from 'react';
import { Image, List, Table } from 'semantic-ui-react'

class AssetList extends Component{
    render(){
        var id = this.props.match.params.id;
        var source = this.props.source;
        var data = source.filter(data => {return data.transactions[0].company == id})
      //console.log(data);
        var output = data.map(item => {
            var tran = item.transactions[0];
            var totalVerify = Object.keys(tran.verification).reduce((prev, key) => {
                return tran.verification[key] ? prev + 1 : prev
            }, 0)

            console.log(totalVerify);
            return (<List.Item key={item.index}>
                        <List.Icon name={totalVerify == Object.keys(tran.verification).length ? 'check' : 'x'}/>
                        <List.Content style={{width:"100%"}}>
                            <List.Header>
                                <p style={{display:"inline"}}>{tran.building_name}</p>
                                <p style={{display:"inline", float:"right"}}>{totalVerify + "/" + Object.keys(tran.verification).length}</p>
                            </List.Header>
                            <List.Description as='a'>{tran.company}</List.Description>
                        </List.Content>
                    </List.Item>
                    )
        })
        return (
            <List animated divided verticalAlign='middle'  size="huge">
                {output}
            </List>
        )
    }
}

export default AssetList