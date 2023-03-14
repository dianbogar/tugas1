function formatName(user) {
    return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Dian Nastasia',
        lastName: 'Bogar'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}! </h1>
    );

function Tiga() {
    return (
        element
    );

}

export default Tiga;