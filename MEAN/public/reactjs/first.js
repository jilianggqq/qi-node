//       ReactDOM.render(
//        <h1>Hello, world!</h1>,
//        document.getElementById('root')
//      );

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = ( <
    h1 >
    Hello, { formatName(user) }!
    <
    /h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);