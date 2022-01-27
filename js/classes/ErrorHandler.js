export class ErrorHandler {
    static createMsgVariablesAreMissing = data => {
        const missing = Object.entries(data).filter(entry => !entry[1] || entry[1].length === 0).map(entry => entry[0]);
        if (missing.length === 0) return null;
        let msg = missing.join(', ');
        msg = msg[0].toUpperCase() + msg.slice(1);
        msg += missing.length > 1 ? ' are missing!' : ' is missing!';
        if (missing.length > 1) { msg = msg.replace(/,([\s_a-z]+!)$/i, ' and$1'); }
        return { msg };
    }

    static handle = (res, name=null) => {
        if (typeof res === 'object') {
            console.error(`${name ?? ''}${name ? ': ' : ''}${res.msg}`);
        }
    }
}