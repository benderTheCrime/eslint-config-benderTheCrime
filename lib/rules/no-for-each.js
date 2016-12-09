module.exports = {
    meta: {
        docs: {
            description: 'Disallow forEach',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === 'forEach') {
                    context.report(node, 'Do not use forEach');
                }
            }
        };
    }
};