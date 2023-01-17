/* global createReactClass, React, ReactDOM, ReactTabbordion */
// import React from 'react'
// import ReactDOM from 'react-dom'

// YES, this demo is in ES5!
(function() {
    // import { Tabbordion, TabPanel as Panel, TabLabel as Label, TabContent as Content } from 'react-tabbordion'
    var Tabbordion = React.createFactory(ReactTabbordion.Tabbordion)
    var Panel = React.createFactory(ReactTabbordion.TabPanel)
    var Label = React.createFactory(ReactTabbordion.TabLabel)
    var Content = React.createFactory(ReactTabbordion.TabContent)

    var demoName = ['Tabs', 'Accordion', 'Multiselect Accordion']

    // you can individually control checked, disabled and visible of each panel
    var initialPanels = [
        {
            checked: true,
            index: 1
        },
        {
            checked: true,
            index: 2
        }
    ]

    // these are the props passed to Tabbordion
    var demoProps = [
        {
            className: 'traditional-tabs',
            blockElements: {
                content: 'traditional-tabs-content',
                panel: 'traditional-tabs-panel',
                label: 'traditional-tabs-title'
            },
            initialPanels: initialPanels,
            name: 'demo'
        },
        {
            animateContent: 'height',
            className: 'accordion',
            blockElements: {
                animator: 'accordion-animator',
                content: 'accordion-content',
                panel: 'accordion-panel',
                label: 'accordion-title'
            },
            initialPanels: initialPanels,
            mode: 'toggle',
            name: 'demo'
        },
        {
            animateContent: 'height',
            className: 'accordion',
            blockElements: {
                animator: 'accordion-animator',
                content: 'accordion-content',
                panel: 'accordion-panel',
                label: 'accordion-title'
            },
            initialPanels: initialPanels,
            mode: 'multiple',
            name: 'demo'
        }
    ]

    // this controls which demo props we use
    var panels = [{ checked: true, index: 2 }]

    // class Demo extends React.PureComponent {}
    var Demo = createReactClass({
        /*
        constructor(props) {
            super(props)
            this.state = { demoProps, panels }
        }
        */
        getInitialState: function() {
            return {
                demoProps: demoProps,
                panels: panels
            }
        },

        /*
        onChange(state) {
            this.setState({
                panels: this.state.panels.map(panel => ({
                    ...panel,
                    checked: state.index === panel.index
                }))
            })
        }
        */
        onChange: function(state) {
            this.setState({
                panels: this.state.panels.map(function(panel) {
                    panel.checked = state.index === panel.index
                    return panel
                })
            })
        },

        /*
        onPanels(panels) {
            this.setState({ panels })
        }
        */
        onPanels: function(panels) {
            this.setState({ panels: panels })
        },

        render: function Demo() {
            return React.createElement(
                'article',
                {},
                React.createElement(
                    'header',
                    {},
                    React.createElement('p', {}, 'Choose display style and mode:'),
                    Tabbordion(
                        {
                            className: 'option-list',
                            blockElements: {
                                panel: 'option-item --horizontal',
                                label: 'option-label --horizontal'
                            },
                            id: 'style',
                            name: 'display-style',
                            onChange: this.onChange,
                            onPanels: this.onPanels,
                            panels: this.state.panels,
                        },
                        this.state.demoProps.map(function(props, index) {
                            return Panel(
                                {
                                    key: 'demo-' + index,
                                    index: index,
                                },
                                Label(null, demoName[index])
                            )
                        })
                    )
                ),
                React.createElement(
                    'section',
                    {},
                    React.createElement('p', {}, 'The component below remains the same, it just receives new props:'),
                    Tabbordion(
                        this.state.demoProps[this.state.panels.filter(function(panel) {
                            return panel.checked === true
                        })[0].index],
                        Panel(
                            null,
                            Label({}, 'Panel #1'),
                            Content(
                                null,
                                React.createElement('h2', {}, 'Content Be Here'),
                                React.createElement('p', {}, 'Unless we have nothing.')
                            )
                        ),
                        Panel(
                            null,
                            Label({}, 'Panel #2'),
                            Content(
                                null,
                                React.createElement('h2', {}, 'More Content Be Here'),
                                React.createElement('p', {}, 'But we have something.')
                            )
                        ),
                        Panel(null, Label({}, 'Panel #3 - No Content')),
                        // non-Panel elements are allowed to be here
                        React.createElement(
                            'div',
                            { className: 'demo' },
                            React.createElement('small', {}, 'This is just a normal div here together with the panels.'
                                + ' If you don\'t see what is awesome: doesn\'t break those nice border-radius styles!')
                        )
                    )
                )
            )
        }
    })

    ReactDOM.render(
        React.createElement(Demo),
        document.getElementById('app')
    )
})()













.accordion {
    list-style: none;
    margin: 0;
    padding: 0;
}

.accordion-panel {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
}

.accordion-panel:after {
    clear: both;
    content: '';
    display: table;
}

.accordion-panel--between,
.accordion-panel--last {
    border-top: 1px solid #D2D2D2;
}

.accordion-title {
    background: #EBEBEB;
    color: #363636;
    cursor: pointer;
    display: block;
    font-weight: bold;
    padding: 1rem;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.accordion-title--checked {
    -webkit-transition: background-color 125ms ease-in-out, border-radius 62.5ms ease-in-out;
    transition: background-color 125ms ease-in-out, border-radius 62.5ms ease-in-out;
}

.accordion-title--unchecked {
    -webkit-transition: background-color 125ms ease-in-out, border-radius 125ms ease-in-out 312.5ms;
    transition: background-color 125ms ease-in-out, border-radius 125ms ease-in-out 312.5ms;
}

/* fix iOS touch not triggering a click from child elements */
.accordion-title > * {
    pointer-events: none;
}

.accordion-title--first {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.accordion-animator--last,
.accordion-content--last,
.accordion-title--last.accordion-title--no-content,
.accordion-title--last.accordion-title--unchecked {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.accordion-title--content:before {
    content: "\f107";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 1.5em;
    line-height: 1rem;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    right: 1rem;
    top: 1rem;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: -webkit-transform 375ms ease-in-out;
    transition: transform 375ms ease-in-out;
}

.accordion-title--checked {
    background: #FAFAFA;
}

.accordion-title--checked:before {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.accordion-title:active:before,
[data-state="tabbordion"]:focus ~ .accordion-title:before {
    color: #b63;
}

.accordion-animator {
    background-color: #EBEBEB;
    -webkit-transition: background-color 125ms ease-in-out, height 375ms ease-in-out;
    transition: background-color 125ms ease-in-out, height 375ms ease-in-out;
}

.accordion-animator:after {
    clear: both;
    content: '';
    display: block;
}

.accordion-animator--checked {
    background-color: #FAFAFA;
}

.accordion-content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #363636;
    display: none;
    float: left;
    padding: 0 1em;
    width: 100%;
}

.accordion-content--animated {
    display: block;
    opacity: 0;
    transform: translateY(-50%);
    -webkit-transition: opacity 375ms ease-in-out, transform 375ms ease-in-out;
    transition: opacity 375ms ease-in-out, transform 375ms ease-in-out;
}

.accordion-content--marginTop {
    margin-top: -65535px;
    transform: translateY(-50%);
    -webkit-transition: margin-top 375ms ease-in-out, opacity 375ms ease-in-out, transform 375ms ease-in-out;
    transition: margin-top 375ms ease-in-out, opacity 375ms ease-in-out, transform 375ms ease-in-out;
}

.accordion-content--checked {
    display: block;
    opacity: 1;
}

.accordion-content--checked.accordion-content--animated {
    transform: translateY(0);
}

.accordion-content--checked.accordion-content--marginTop {
    margin-top: 0;
}














.traditional-tabs {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;
}

.traditional-tabs > :not(.traditional-tabs-panel) {
    white-space: normal;
}

.traditional-tabs:after {
    clear: both;
    content: '';
    display: table;
}

.traditional-tabs-panel {
    display: inline;
    margin: 0;
    padding: 0;
}

.traditional-tabs-title {
    background: #EBEBEB;
    color: #363636;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    padding: 1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: normal;
}

.traditional-tabs-title--between,
.traditional-tabs-title--last {
    border-left: 1px solid #D2D2D2;
}

.traditional-tabs-title--first {
    border-top-left-radius: 3px;
}

.traditional-tabs-title--last {
    border-top-right-radius: 3px;
}

.traditional-tabs-title--checked {
    background: #FAFAFA;
}

.traditional-tabs-content {
    background: #FAFAFA;
    border-radius: 0 3px 3px 3px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #363636;
    display: none;
    float: left;
    overflow: hidden;
    padding: 0 1em;
    white-space: normal;
    width: 100%;
}

.traditional-tabs-content--checked {
    display: block;
}
Footer





.option-list {
    list-style: none;
    margin: 1em 0;
    padding: 0;
    position: relative;
}

.option-item {
    display: inline-block;
    vertical-align: middle;
}

.option-item--vertical {
    width: 100%;
}

.option-label--vertical.option-label--first {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.option-label--vertical.option-label--last {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.option-label--horizontal.option-label--first {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
}

.option-label--horizontal.option-label--last {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
}

.option-label {
    background: #EBEBEB;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25), inset 0 0 3px rgba(0, 0, 0, 0.25);
    color: #363636;
    cursor: pointer;
    display: block;
    padding: 0.5em;
    -webkit-transition: background-color 0.125s ease-in-out, box-shadow 0.125s ease-in-out, margin 0.125s ease-in-out, padding 0.125s ease-in-out;
    transition: background-color 0.125s ease-in-out, box-shadow 0.125s ease-in-out, margin 0.125s ease-in-out, padding 0.125s ease-in-out;
    will-change: background-color, box-shadow, margin, padding;
}

.option-label--checked {
    background: #FAFAFA;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 5px rgba(0, 0, 0, 0.5);
    margin: -0.125em;
    padding: 0.625em;
    position: relative;
}
