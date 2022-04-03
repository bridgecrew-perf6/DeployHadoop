import * as pulumi from "@pulumi/pulumi";
import * as os from "@pulumi/openstack";

const master = new os.compute.Instance("master", {
	flavorName: "xlarge",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "hadoop"]
});

const worker1 = new os.compute.Instance("worker1", {
	flavorName: "xlarge",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "hadoop"]
});

const worker2 = new os.compute.Instance("worker2", {
	flavorName: "xlarge",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "hadoop"]
});

const worker3 = new os.compute.Instance("worker3", {
	flavorName: "xlarge",
	imageName: "ubuntu-focal-20.04",
	keyPair: "Base",
	availabilityZone: "nova",
	securityGroups: ["default", "hadoop"]
});



const floatingIPm = new os.compute.FloatingIp("master", {
    pool: "externa",
});

const floatingIPw1 = new os.compute.FloatingIp("w1", {
    pool: "externa",
});

const floatingIPw2 = new os.compute.FloatingIp("w2", {
    pool: "externa",
});
const floatingIPw3 = new os.compute.FloatingIp("w3", {
    pool: "externa",
});

const FloatingIpAssociate = new os.compute.FloatingIpAssociate("fipa_1", {
    floatingIp: floatingIPm.address,
    instanceId: master.id,
});

const FloatingIpAssociate1 = new os.compute.FloatingIpAssociate("fipa_2", {
    floatingIp: floatingIPw1.address,
    instanceId: worker1.id,
});

const FloatingIpAssociate2 = new os.compute.FloatingIpAssociate("fipa_3", {
    floatingIp: floatingIPw2.address,
    instanceId: worker2.id,
});
const FloatingIpAssociat3 = new os.compute.FloatingIpAssociate("fipa_4", {
    floatingIp: floatingIPw3.address,
    instanceId: worker3.id,
});

export const floatingIPAddress =  floatingIPm.address
export const floatingIP1Address =  master.accessIpV4

export const floatingIPAddress1 =  floatingIPw1.address
export const floatingIP1Address1 =  worker1.accessIpV4

export const floatingIPAddress2 =  floatingIPw2.address
export const floatingIP1Address2 =  worker2.accessIpV4

export const floatingIPAddress3 =  floatingIPw3.address
export const floatingIP1Address3 =  worker3.accessIpV4
