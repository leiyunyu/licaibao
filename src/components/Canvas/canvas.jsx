import React from 'react';
class Canvas extends React.Component{
    componentDidMount(){
        let cvs = document.querySelectorAll('.mycanvas');
        var deg = Math.PI / 180;
        let start = 0;
        cvs.forEach((v, i) => {
            var ctx = v.getContext('2d');
            ctx.translate(45,45);
            
            ctx.beginPath();
            ctx.arc(0,0,25,0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(0,0,25,-90 * deg,(this.props.data[start].cav/100*360-90)*deg);
            ctx.strokeStyle = '#FFC426';
            ctx.lineWidth = 6;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('抢购',0,0);
            ctx.closePath();
            start++;
        }); 
    }
    render () {
        return (<canvas className='mycanvas' width='73' height='73'></canvas>)
    }
};
export default Canvas;