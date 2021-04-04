<template>
    <div>
        <div v-if="warningZone">log out 될꺼임</div>
        <div v-if="logOutZone">log out zone</div>
    </div>
</template>

<script>
    export default {
        name: 'AutoLogout',

        data: function () {
            return {
                events: ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],

                warningTimer: null,
                logoutTimer: null,
                warningZone: false,
                logOutZone: false,
            };
        },

        mounted() {
            this.events.forEach(event => {
                window.addEventListener(event, this.resetTimer);
            }, this);

            this.resetTimer();
        },

        destroyed() {
            this.events.forEach(event => {
                window.removeEventListener(event, this.resetTimer);
            }, this);

            this.setTimers();
        },

        methods: {
            setTimers() {
                this.warningTimer = setTimeout(this.warningMessage, 4 * 1000);
                this.logoutTimer = setTimeout(this.logoutUser, 10 * 1000);
                this.warningZone = false;
            },

            warningMessage() {
                this.warningZone = true;
            },

            logoutUser() {
                this.logOutZone = true;
            },

            resetTimer() {
                clearTimeout(this.warningTimer);
                clearTimeout(this.logoutTimer);

                this.setTimers();
            },
        },
    };
</script>

<style></style>
