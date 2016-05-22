import React from 'react';

module.exports = React.createClass({
  render () {
    const iframeStyle = {
      borderWidth: 0
    };
    
    return (  
<div>
  <div className="row">
    <a href="https://www.google.com/calendar/embed?src=5k8e2eer39ir4c54eucr6vgccs%40group.calendar.google.com&ctz=America/Los_Angeles">
      View Calendar on own page
    </a>
  </div>
  <div className="callout">
    <div className="show-for-small-only">
      <iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23ffffff&amp;src=5k8e2eer39ir4c54eucr6vgccs%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FLos_Angeles" style={iframeStyle} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
    <div className="show-for-medium-only">
      <iframe src="https://www.google.com/calendar/embed?height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23ffffff&amp;src=5k8e2eer39ir4c54eucr6vgccs%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FLos_Angeles" style={iframeStyle} width="100%" height="480" frameborder="0" scrolling="no"></iframe>
    </div>
    <div className="show-for-large">
      <iframe src="https://www.google.com/calendar/embed?height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23ffffff&amp;src=5k8e2eer39ir4c54eucr6vgccs%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FLos_Angeles" style={iframeStyle} width="100%" height="540" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>  
</div>
    );
  }
});
