import * as React from 'react';
import styles from './Announcements.module.scss';
import { IAnnouncementsProps } from './IAnnouncementsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';


export default class Announcements extends React.Component{
  
public constructor(props){
  super(props);

  this.state = {
    announcement :[{
      title: 'first title',
      date: '00',
      body: 'body body',
    }]
    
  };


  this.getAnnouncement = this.getAnnouncement.bind(this);
}



// public getAnnouncement () {
//   var reactHandler = this; 
//     return jquery.ajax({ 
//         url: `https://vanguarddev.sharepoint.com/sites/Dev1/Lists/Announcements/getbytitle('EmployeeList')/items`, 
//         type: "GET", 
//         headers:{'Accept': 'application/json; odata=verbose;'}, 
//         success: function(resultData) { 
//           reactHandler.setState({ 
//             announcement: resultData.d.results 
//           }); 
//         }, 
//         error : function(jqXHR, textStatus, errorThrown) { 
//         } 
//     }); 
// }







  public render(): React.ReactElement<IAnnouncementsProps> {
    return (
      <div className={ styles.announcements }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>List of Announcements</span>
              <ul>
                {this.state.announcement.title}
              </ul>

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
