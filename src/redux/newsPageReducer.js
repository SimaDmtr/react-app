let initialState = {
    newsItems: [
        {
            id: '1',
            created: 'Тест Тестович',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: '2',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '3',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '4',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '5',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '6',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '7',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '8',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '9',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '10',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '11',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
        {
            id: '12',
            created: 'Тест1 Тестович1',
            content: 'Non odio euismod lacinia at quis risus sed vulputate. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis. Quis enim lobortis scelerisque fermentum dui faucibus. Senectus et netus et malesuada fames ac. Blandit libero volutpat sed cras ornare arcu. Placerat in egestas erat imperdiet sed. Dapibus ultrices in iaculis nunc. In mollis nunc sed id semper risus in. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.'
        },
    ]
};

const newsPageReducer = (state = initialState, action)  =>{
    return state;
};

export default newsPageReducer;