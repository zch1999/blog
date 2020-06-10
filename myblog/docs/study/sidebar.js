module.exports = [
    {
        title: 'javascript',
        collapsable: false,
        children: [
            './javascript',
            {
                title: 'ECMAScript 6 入门',
                collapsable: true,
                children: [
                    './javascript/es6/1'
                ]
            },
            './javascript/context',
            './javascript/closure',
            './javascript/this',
            './javascript/event_loop',
            './javascript/ajax'
        ]
    },
    {
        title: 'javascript输出题',
        collapsable: true,
        children: [
            './js_question/question'
        ]
    },
    {
        title: 'leetcode',
        collapsable: true,
        children: [
            './leetcode/quick_sort',
            './leetcode/151',
            './leetcode/445',
            './leetcode/1282',
            './leetcode/560',
            './leetcode/974',
            './leetcode/long_array',
            './leetcode/array_design'
        ]
    },
    {
        title: 'css',
        collapsable: true,
        children: [
            './css/flex',
            './css/position',
            './css/center',
            './css/Semantization'
        ]
    },
    {
        title: '手写',
        collapsable: true,
        children: [
            './Handwriting/new'
        ]
    },
    {
        title: 'network',
        collapsable: true,
        children: [
            './network/Cross_Domain'
        ]
    },
    {
        title: 'browser',
        collapsable: true,
        children: [
            './browser/1',
            './browser/2'
        ]
    }
]