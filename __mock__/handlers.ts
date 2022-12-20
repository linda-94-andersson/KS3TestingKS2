import { rest } from "msw";

export const buildHandlers = (config: MockType) => {
  const {
    baseUrl,
    idUser,
    idProject,
    idTask,
    idTimelog,
    nameUser,
    nameProject,
    nameTask,
    userId,
    projectId,
    createdDate,
    startTime,
    endTime,
    taskId,
    color,
    idInvoice,
    status,
    due_date,
    sum,
    customer_name,
    created_date,
    hourly_rate,
  } = config;

  let userList = [
    {
      id: idUser,
      name: nameUser,
    },
  ];

  let projectList = [
    {
      id: idProject,
      name: nameProject,
      color: color,
      userId: userId,
      hourly_rate: hourly_rate,
    },
  ];

  let taskList = [
    {
      id: idTask,
      name: nameTask,
      createdDate: createdDate,
      projectId: idProject,
    },
  ];

  let timelogsList = [
    {
      id: idTimelog,
      startTime: startTime,
      endTime: endTime,
      taskId: taskId,
    },
  ];

  let invoiceList = [
    {
      id: idInvoice,
      status: status,
      due_date: due_date,
      sum: sum,
      customer_name: customer_name,
      created_date: created_date,
    },
  ];

  return [
    //users
    rest.get(baseUrl + "/users", (req, res, ctx) => {
      return res(ctx.json(userList));
    }),
    rest.post(baseUrl + "/users", (req, res, ctx) => {
      return res(ctx.json(userList));
    }),
    rest.delete(baseUrl + "/users/:id", (req, res, ctx) => {
      userList = userList.filter((user) => user.id !== req.params.id);
      return res(ctx.status(200));
    }),

    //projects
    rest.get(baseUrl + "/projects", (req, res, ctx) => {
      return res(ctx.json(projectList));
    }),
    rest.post(baseUrl + "/projects", (req, res, ctx) => {
      return res(ctx.json(projectList));
    }),
    rest.delete(baseUrl + "/projects/:id", (req, res, ctx) => {
      projectList = projectList.filter(
        (project) => project.id !== req.params.id
      );
      return res(ctx.status(200));
    }),

    //tasks
    rest.get(baseUrl + "/tasks", (req, res, ctx) => {
      return res(ctx.json(taskList));
    }),
    rest.post(baseUrl + "/tasks", (req, res, ctx) => {
      return res(ctx.json(taskList));
    }),
    rest.delete(baseUrl + "/tasks/:id", (req, res, ctx) => {
      taskList = taskList.filter((task) => task.id !== req.params.id);
      return res(ctx.status(200));
    }),

    //timelogs
    rest.get(baseUrl + "/timelogs", (req, res, ctx) => {
      return res(ctx.json(timelogsList));
    }),
    rest.post(baseUrl + "/timelogs", (req, res, ctx) => {
      return res(ctx.json(timelogsList));
    }),
    rest.delete(baseUrl + "/timelogs/:id", (req, res, ctx) => {
      timelogsList = timelogsList.filter(
        (timelog) => timelog.id !== req.params.id
      );
      return res(ctx.status(200));
    }),

    //invoices
    rest.get(baseUrl + "/invoices", (req, res, ctx) => {
      return res(ctx.json(invoiceList));
    }),
    rest.post(baseUrl + "/invoices", (req, res, ctx) => {
      return res(ctx.json(invoiceList));
    }),
  ];
};
