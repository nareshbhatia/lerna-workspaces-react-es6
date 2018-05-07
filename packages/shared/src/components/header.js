import React from 'react';

export class Header extends React.Component {
    render() {
        const { children } = this.props;
        const styles = {
            header: {
                height: 54,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                backgroundColor: '#2196f3',
                color: '#ffffff'
            },
            heading: {
                fontSize: 20,
                fontWeight: 'normal'
            }
        };

        return (
            <div style={styles.header}>
                <h1 style={styles.heading}>{children}</h1>
            </div>
        );
    }
}
