<script>
    import "../App.css";
</script>

<div class="body">
    <slot/>

    <footer class="footer">
        <a href="https://github.com/ThoIven/political_compass">Für Interessierte</a>
    </footer>
</div>

<style>

    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .footer {
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: end;
        padding: 30px;
        color: white;
    }

    .footer > a {
        text-decoration: none;
        color: rgb(96, 146, 238);
    }

</style>