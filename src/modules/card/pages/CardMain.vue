<template>
    <div>
        <button @click="sStartTest">Test</button>
        <div class="padding">
            <h2>And be programatically set/reset</h2>
            <div>
                <span v-for="(item, i) in items" :key="i" style="padding: 5px">
                    <toggle-button
                        :value="item.value"
                        :color="item.color"
                        :sync="true"
                        :labels="{ checked: '신청', unchecked: '취소' }"
                        :key="i"
                        @change="updateItemValue(i)"
                    />
                </span>
            </div>
        </div>
        <toggle-button
            :value="true"
            name="phone"
            :labels="{ checked: 'Android', unchecked: 'iPhone' }"
            :color="{ checked: '#7DCE94', unchecked: '#82C7EB' }"
            :width="80"
            @input="test"
        />

        <toggle-button
            :width="120"
            :value="true"
            color="#BB99CD"
            :labels="{ checked: 'Only left label!', unchecked: '' }"
        />

        <toggle-button
            :value="false"
            :width="120"
            color="#BB99CD"
            :labels="{ checked: '', unchecked: 'Only right label!' }"
        />

        <toggle-button :value="false" :width="80" :labels="{ unchecked: 'Disabled' }" />

        <toggle-button
            :value="atest"
            :width="140"
            :color="{ disabled: '#FF6699' }"
            :labels="{ unchecked: 'Custom disabled color' }"
            :disabled="true"
        />

        <toggle-button
            :value="true"
            :labels="{ checked: 'Button', unchecked: 'Color' }"
            :color="{ checked: '#7DCE94', unchecked: '#82C7EB' }"
            :width="80"
            :switchColor="{ checked: 'linear-gradient(red, yellow)', unchecked: '#F2C00B' }"
        />

        <toggle-button :labels="true">
            <template slot="checked">
                <!-- <fa icon="check"></fa> -->
            </template>
            <template slot="unchecked">
                <!-- <fa icon="times"></fa> -->
            </template>
        </toggle-button>

        <toggle-button :width="120" :labels="{ checked: '', unchecked: 'FA Icon Support' }">
            <template slot="checked">
                <!-- <fa icon="check"></fa> -->
            </template>
        </toggle-button>

        {{ items }}
    </div>
</template>

<script>
    import CONST from '@/utils/const.js';
    import ToggleButton from './ToggleButton.vue';

    export default {
        data() {
            return {
                atest: true,
                toggled: false,
                items: [
                    { color: '#E8D2AE', value: false },
                    { color: '#CB8589', value: false },
                    { color: '#796465', value: false },
                    { color: '#79BD8F', value: false },
                    { color: '#00A388', value: false },
                ],
                hodor: false,
            };
        },
        components: { ToggleButton },
        methods: {
            test(a) {
                console.log(a);
            },
            sStartTest() {
                this.$scard.start();
                console.log(this.$scard.const.USER_PW);
                console.log([CONST.USER_PW]);
            },
            updateItemValue(index) {
                this.items[index].value = !this.items[index].value;
            },
        },
    };
</script>

<style scoped lang="scss">
    button {
        color: red;
        align-items: center;
        cursor: pointer;
    }
</style>
