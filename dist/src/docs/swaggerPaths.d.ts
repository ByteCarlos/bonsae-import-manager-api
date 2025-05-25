export declare const swaggerPaths: {
    /**
     * Import
     */
    '/import/csv': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                data: {
                                    type: string;
                                    description: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/import/save': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                data: {
                                    type: string;
                                    properties: {
                                        studentsEnrollments: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        professorEnrollments: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/import/save/:id': {
        post: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
                description: string;
            }[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    /**
     * Process
     */
    '/process': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                    example: string;
                                };
                            };
                            required: string[];
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                400: {
                    description: string;
                };
                409: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/{processId}': {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/full/{processId}': {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/partial/{processId}/{model}': {
        get: {
            summary: string;
            tags: string[];
            parameters: ({
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum?: undefined;
                };
            } | {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum: string[];
                };
            })[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: ({
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum?: undefined;
                };
            } | {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum: string[];
                };
            })[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    /**
     * ProfessorEnrollment
     */
    "/professor-enrollment/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                professorEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * SchoolPeriod
     */
    "/school-period/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                code: {
                                    type: string;
                                };
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                code: {
                                    type: string;
                                };
                                name: {
                                    type: string;
                                };
                                startDate: {
                                    type: string;
                                    format: string;
                                };
                                endDate: {
                                    type: string;
                                    format: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/destroy/{id}": {
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                code: {
                                    type: string;
                                };
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * StudentEnrollment
     */
    "/student-enrollment/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                studentEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                studentEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * Subject
     */
    "/subject/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                code: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                periodId: {
                                    type: string;
                                };
                            };
                            additionalProperties: boolean;
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/destroy/{id}": {
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
};
