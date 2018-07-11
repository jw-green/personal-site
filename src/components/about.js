import React, { Component } from 'react';
import Showcase_T from './showcase_t';
import '../styles/about.css'

class About extends Component {
    renderCopy() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae maximus lorem. Duis finibus orci sem, non ornare arcu pretium in. Quisque vitae felis eros. Sed a dolor erat. Aliquam sit amet est eu orci fermentum suscipit. Integer metus magna, dapibus sit amet rutrum nec, fringilla et sapien. Aliquam erat volutpat. Sed non pretium lectus, vitae volutpat tortor. Ut mauris neque, ullamcorper nec feugiat vitae, hendrerit quis lorem.
                </p>

                <p>
                    Cras vitae ligula nisi. Maecenas ipsum dui, vulputate id sapien non, fringilla vestibulum turpis. Nullam at euismod felis. Aenean rhoncus ex a auctor tristique. Donec mollis, odio ut iaculis fermentum, risus leo convallis eros, vel tempus metus tellus a lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mi felis, volutpat vel lobortis in, auctor ac est. Etiam eu lorem dui. Etiam euismod erat et odio vehicula, id venenatis diam finibus. Morbi ut neque id ex egestas molestie. Pellentesque fringilla, leo in facilisis consequat, odio velit rhoncus lectus, vel dapibus ligula lorem sit amet nisl. Vestibulum tristique felis in mi faucibus, ac efficitur neque egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel tortor auctor, accumsan nibh a, placerat lectus. In ut sem risus.
                </p>
            </div>
        )
    }
    render() {
        return (
            <Showcase_T type="about" 
                        title="About" 
                        img={this.props.img} 
                        copy={this.renderCopy()}
            />
        )
    }
}

export default About;