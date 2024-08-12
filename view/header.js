module.exports = (meta) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    html, body, * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <title>${meta?.title ?? 'Handylist'}</title>
</head>
<body class="h-screen flex flex-row justify-center">   
    `
}

//    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />