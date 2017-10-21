import React, {Component} from 'react';
import axios from 'axios'
import $ from 'jquery'


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        const embedcode = `<script>
            (function() {
                var cx = '000580492974828785288:8zrrgyjwa6e';
                var gcse = document.createElement('script');
                gcse.type = 'text/javascript';
                gcse.async = true;
                gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(gcse, s);
            })();
            </script>
            <gcse:search></gcse:search>`
            $('#gsearch').html(embedcode)
    }

    render() {
        return (
            <div id='gsearch'>
            </div>
        );
    }
}



export default Search;
